/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import Button from "../components/login-btn";
import io from "socket.io-client";

const socket = io("http://localhost:3001");

const test = () => {
  //Room State
  const [room, setRoom] = useState("");

  // Messages States
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  };

  const sendMessage = () => {
    socket.emit("send_message", { message, room });
  };

  useEffect(() => {
    socket.on("receive_message", data => {
      setMessageReceived(data.message);
    });
  }, [socket]);

  return (
    <div>
      <Button></Button>
    </div>
  );
};

export default test;
