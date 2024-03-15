"use client";
import { ModeToggle } from "@/components/ModeToggle";
import { Switch } from "@/components/ui/switch";
import AvatarUi from "@/components/Avatar";
import { Card, CardBody, Checkbox } from "@nextui-org/react";
// import Profile from "@/components/Profile";
import Image from "next/image";
import AlertMsg from "@/components/AlertMsg";
import Button from "@/components/Button";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Label from "@/components/Label";

import LikeButton from "@/components/LikeButton";
import { useState } from "react";

export default function Home() {
  const [value, setvalue] = useState("");
  const handleChange = (event: any) => {
    setvalue(event.target.value);
  };
  return (
    <main className="min-h-screen min-w-screen p-2">
      <div className="flex justify-evenly items-center">
        <AvatarUi />
        <h1>Description goes here</h1>
        <LikeButton />
        <LikeButton />
      </div>
      <div className="flex items-center justify-evenly">
        <div className="flex flex-col">
          <Checkbox defaultSelected color="default">
            Checkbbox label
          </Checkbox>
          <Checkbox defaultSelected color="primary">
            Checkbbox label
          </Checkbox>
        </div>
        <Switch />
        <Switch />
        <Label backgroundColor={"#fca5a5"} />
        <Label backgroundColor={"#f0df5d"} />
        <Label backgroundColor={"#50f2b1"} />
      </div>
      <div className="flex">
        <div className="p-[6px] flex flex-col">
          <div className="w-[50%] flex items-center p-3 justify-between">
            <AvatarUi />
            <div className="flex items-center">
              <Switch />
              <h1 className="m-2">
                Toggle Label
              </h1>
            </div>
          </div>
          <input
            type="text"
            placeholder="placeholder"
            value={value}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          />        
        </div>
        <div className="w-[50%] flex">
          <div className="flex flex-col">
            <Checkbox defaultSelected color="default">
              Checkbbox label
            </Checkbox>
            <Checkbox defaultSelected color="primary">
              Checkbbox label
            </Checkbox>
            <Checkbox defaultSelected color="default">
              Checkbbox label
            </Checkbox>
          </div>
          <div className="flex flex-col">
            <Checkbox defaultSelected color="default">
              Checkbbox label
            </Checkbox>
            <Checkbox defaultSelected color="primary" className="ml-6">
              Checkbbox label
            </Checkbox>
            <Checkbox defaultSelected color="default" className="ml-12">
              Checkbbox label
            </Checkbox>
          </div>
        </div>
      </div>
      <div className="flex w-full">
        <div className="w-[50%]">
          <Button
            backgroundColor={"#000"}
            text={"Call to action"}
            textColor={"#fafafa"}
          />
          <Button
            backgroundColor={"#e3e2de"}
            text={"Call to action"}
            textColor={"#333"}
          />
          <Button
            backgroundColor={"#fafafa"}
            text={"Call to action"}
            textColor={"#333"}
          />
          <Button
            backgroundColor={"#f01f3b"}
            text={"Call to action"}
            textColor={"#fafafa"}
          />
        </div>
        <div className="w-[45%] m-2 px-4">
          <Calendar />
        </div>
      </div>
      <div className=" ml-6">
        <AlertMsg
          backgroundColor={"#fca5a5"}
          content={"This is the content"}
          heading={"Alert Message!"}
        />
        <AlertMsg
          backgroundColor={"#50f2b1"}
          content={"This is the content"}
          heading={"Alert Message!"}
        />
        <AlertMsg
          backgroundColor={"#509ef2"}
          content={"This is the content"}
          heading={"Alert Message!"}
        />
        <AlertMsg
          backgroundColor={"#f0df5d"}
          content={"This is the content"}
          heading={"Alert Message!"}
        />
      </div>
      <nav className="flex w-full h-[5%] justify-between">
        <ModeToggle />
        <ModeToggle />
      </nav>
      <div className="flex justify-evenly">
        <Card radius="lg">
          <CardBody>
            <p>Label</p>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <p>Label</p>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <p>Label</p>
          </CardBody>
        </Card>
      </div>
      <div className="flex gap-4">
        <Checkbox defaultSelected color="secondary">
          Secondary
        </Checkbox>
        <Checkbox defaultSelected color="success">
          Success
        </Checkbox>
        <Checkbox defaultSelected color="warning">
          Warning
        </Checkbox>
        <Checkbox defaultSelected color="danger">
          Danger
        </Checkbox>
      </div>
    </main>
  );
}
