


// Register

import { instance } from "../config/Config";
import { RequestPath } from "./RequestPath";

export const CREATE_USER = (data) => instance.post(RequestPath.createUser, data);