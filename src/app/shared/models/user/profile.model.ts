import { ProfilePicture } from "../picture/profile-picture.model"
import { Role } from "./role.model"

export interface Profile{
  id: string
  name: string
  email: string
  role?: Role
  picture?: ProfilePicture
}
