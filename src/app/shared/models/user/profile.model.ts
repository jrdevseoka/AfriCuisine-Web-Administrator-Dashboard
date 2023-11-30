import { ProfilePicture } from "../picture/profile-picture.model"
import { Role } from "./role.model"

export interface Profile{
  id: string
  email: string
  name: string
  token?: string
  role?: Role
  picture?: ProfilePicture
}
