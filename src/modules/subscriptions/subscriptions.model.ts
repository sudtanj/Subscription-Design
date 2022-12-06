import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema()
export class SubscriptionsModel {
  @Prop() name: string;
  @Prop() length_in_days: number;
  @Prop() discount: number;
  @Prop() price: number;
}

export const SubscriptionSchema = SchemaFactory.createForClass(SubscriptionsModel)