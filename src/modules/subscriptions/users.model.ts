import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class UsersModel {
  @Prop() username: string;
  @Prop() password_hash: string;
  @Prop() subscription_id: string | null;
  @Prop({
    default: null,
  })
  subscription_expired_date: Date | null;
}

export const UsersSchema = SchemaFactory.createForClass(UsersModel);
