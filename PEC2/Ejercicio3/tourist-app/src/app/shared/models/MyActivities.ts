export class MyActivities {
  id: number
  userId: number
  activityId: number

  constructor(userId: number, activityId: number) {
    this.userId = userId;
    this.activityId = activityId;
  }
}