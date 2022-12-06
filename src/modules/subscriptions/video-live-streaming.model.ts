import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema()
export class VideoLiveStreamingModel {
 @Prop() title: string
 @Prop() description: string
 @Prop() cdn_url: string
 @Prop() is_premier: boolean
 @Prop() create_time: Date
}

export const VideoLiveSchema = SchemaFactory.createForClass(VideoLiveStreamingModel)