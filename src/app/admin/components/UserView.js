"use client";

import { Check, Replay } from "@mui/icons-material";
import { Avatar, Button, Input } from "@nextui-org/react";
import UserCard from "./UserCard";

import TempPic from "../../../../public/pfp.jpg";

import {
  Clear,
  Delete,
  Edit,
  Logout,
  Preview,
  Save,
  Upload,
} from "@mui/icons-material";

export default function UserView({ user }) {
  return (
    <>
      <div className="w-full h-[72px]  flex items-end justify-between pb-2">
        <div className="w-[15%]">
          <Input
            label="User"
            placeholder="Search a user"
            size="lg"
            isClearable
          ></Input>
        </div>
        <div className="flex gap-2 w-[25%] justify-end h-full">
          <Button
            className="w-[30%] h-[80%]"
            color="danger"
            startContent={<Replay />}
            variant="ghost"
          >
            DISCARD
          </Button>

          <Button
            className="w-[35%] h-[80%]"
            startContent={<Check />}
            color="success"
          >
            SAVE CHANGES
          </Button>
        </div>
      </div>
      <div className="w-full h-[95%] flex  ">
        <div className="w-1/2 h-full px-2 rounded-md bg-white">
          <div className="pt-2 color-slate-500 text-[#14293A]">
            {" "}
            Total users found: 0
          </div>
          <div className="w-[100%] h-[90%] flex flex-col gap-2 overflow-scroll">
            <UserCard user={user} selected={true} />
            <UserCard user={user} />
            <UserCard user={user} />
          </div>
        </div>
        <div className="w-1/2 h-full flex items-center justify-center">
          <div className="px-2 bg-[#14293A] h-[90%] w-[90%] flex flex-col items-center justify-between">
            {user.profile_picture === "" && (
              <img
                src={TempPic.src}
                className="w-3/5 border-1 rounded-xl border-gray-500 h-3/5 "
              />
            )}
            {user.profile_picture !== "" && (
              <img
                src={user.profile_picture}
                className="w-3/5 border-1 rounded-xl border-gray-500 h-4/5 "
              />
            )}

            <div className=" w-4/5 gap-4 flex flex-col border-b-1 border-t-1 border-gray-700 pb-2 items-center ">
              <h1 className="text-2xl font-bold center">General Information</h1>
              <div className=" flex flex-col gap-1 items-center">
                <p>ID:</p>
                <div className="text-gray-400 truncate">{user._id}</div>
              </div>
              <div className="flex justify-between w-full">
                <div className="w-3/4 flex flex-col gap-1 items-center">
                  <p>Name:</p>
                  <div className="text-gray-400 truncate">{user.name}</div>
                </div>
                <div className="w-3/4 flex flex-col gap-1 items-center">
                  <p>Username:</p>
                  <div className="text-gray-400 truncate">{user.username}</div>
                </div>
              </div>
              <div className="flex justify-between w-full">
                <div className="w-3/4 flex flex-col gap-1 items-center">
                  <p>Email:</p>
                  <div className="text-gray-400 truncate">{user.email}</div>
                </div>
                <div className="w-3/4 flex flex-col gap-1 items-center">
                  <p>Phone:</p>
                  <div className="text-gray-400 truncate">{user.phone}</div>
                </div>
              </div>
              <div className=" flex gap-4 items-center">
                <Button
                  color="danger"
                  size="xl"
                  variant="bordered"
                  startContent={<Delete />}
                >
                  Delete Account
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
