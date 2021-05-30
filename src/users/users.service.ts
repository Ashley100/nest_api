import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { User, UserDocument } from "../schemas/user.schema";


@Injectable()
export class UserService {

    constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>) {}

    getStatus(): string{
        return "User Status"
    }

    async create() {
        const createdUser = new this.UserModel({
            name: "Piter",
            age: 26
        });
        return createdUser.save();
    }

    async delete(id:string) {
        await this.UserModel.deleteOne({_id: id});
        return id + ": deleted!";
    }
}