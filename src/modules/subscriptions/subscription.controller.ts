import { Body, Controller, Get, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { HydratedDocument, Model } from 'mongoose';
import { SubscriptionsModel } from './subscriptions.model';
import { UsersModel } from './users.model';
import * as moment from 'moment';

@Controller('subscription')
export class SubscriptionController {
  constructor(
    @InjectModel(SubscriptionsModel.name)
    private subscriptionModel: Model<HydratedDocument<SubscriptionsModel>>,
    @InjectModel(UsersModel.name)
    private usersModel: Model<HydratedDocument<UsersModel>>,
  ) {}

  @Get('/')
  async getSubs() {
    const subscriptions = await this.subscriptionModel.find();
    return {
      status: 'success',
      data: subscriptions,
    };
  }

  @Post('/subscribe')
  async subscribe(@Body() body: any) {
    const user = await this.usersModel.findById(body.userId).exec();
    if (!user) {
      return {
        status: 'failed',
        message: 'user not found!',
      };
    }
    if (
      user.subscription_expired_date &&
      moment(new Date()).isBefore(user.subscription_expired_date)
    ) {
      return {
        status: 'failed',
        message: 'User still has active subscription!',
      };
    }

    const subscription = await this.subscriptionModel
      .findById(body.subscriptionId)
      .exec();
    if (!subscription) {
      return {
        status: 'failed',
        message: 'user not found!',
      };
    }

    user.subscription_id = subscription.id;
    user.subscription_expired_date = moment()
      .add(subscription.length_in_days, 'days')
      .toDate();

    await user.save();

    return user
  }
}
