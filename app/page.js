"use client"
import { useState } from "react"
import Image from "next/image"

import AvatarAngela from "../public/images/avatar-angela-gray.webp"
import AvatarAnna from "../public/images/avatar-anna-kim.webp"
import AvatarJacob from "../public/images/avatar-jacob-thompson.webp"
import AvatarKimberly from "../public/images/avatar-kimberly-smith.webp"
import AvatarMark from "../public/images/avatar-mark-webber.webp"
import AvatarNathan from "../public/images/avatar-nathan-peterson.webp"
import AvatarRizky from "../public/images/avatar-rizky-hasanuddin.webp"
import ImageChess from "../public/images/image-chess.webp"

const Home = () => {
  const [numberUnread, setNumberUnread] = useState(3)
  const [isUnread, setUnread] = useState(true)

  const handleRead = () => {
    setNumberUnread(0)
    setUnread(false)
  }

  const unreadMark = () => <span className="unreadMark"> </span>
  const name = (name) => (
    <span className="extrabold name clickable">{name}</span>
  )
  const subject = (subject, addedClass = "") => (
    <span className={`bold md:extrabold clickable ${addedClass}`}>
      {subject}
    </span>
  )

  return (
    <div className="w-screen h-full md:h-fit md:max-w-3xl bg-white rounded-[15px] px-4 md:px-8 md:pt-8 pt-6">
      <header className="flex justify-between mb-6 md:mb-8">
        <div className="flex">
          <h1>Notifications</h1>
          <p className="self-center text-body rounded-md ml-2 md:ml-3 extrabold text-white bg-blue px-3 py-0.5">
            {numberUnread}
          </p>
        </div>
        <p className="self-center clickable" onClick={() => handleRead()}>
          Mark as all read
        </p>
      </header>
      <main className="space-y-2.5 md:space-x-2">
        <section className={isUnread ? "unread" : ""}>
          <Image className="avatar" src={AvatarMark} />
          <div>
            <p>
              {name("Mark Webber")} reacted to your recent post{" "}
              {subject("My first tournament today!")}
              {isUnread && unreadMark()}
            </p>
            <p className="date ">1m ago</p>
          </div>
        </section>
        <section className={isUnread ? "unread" : ""}>
          <Image className="avatar" src={AvatarAngela} />
          <div>
            <p>
              {name("Angela Grey")} followed you
              {isUnread && unreadMark()}
            </p>
            <p className="date">5m ago</p>
          </div>
        </section>
        <section className={isUnread ? "unread" : ""}>
          <Image className="avatar" src={AvatarJacob} />
          <div>
            <p>
              {name("Jacob Thompson")} has joined your group{" "}
              {subject("Chess Club", "group")}
              {isUnread && unreadMark()}
            </p>
            <p className="date">5m ago</p>
          </div>
        </section>
        <section>
          <Image className="avatar" src={AvatarRizky} />
          <div>
            <p>{name("Rizky Hasanuddin")} sent you a private message</p>
            <p className="date">5 days ago</p>
            <p className="p-4 border-solid border-veryLightGreyBlue border-[1px] rounded-[5px]">
              Hello, thanks for setting up the Chess Club. I’ve been a member
              for a few weeks now and I’m already having lots of fun and
              improving my game.
            </p>
          </div>
        </section>
        <section className="justify-between">
          <div className="flex">
            <Image className="avatar" src={AvatarKimberly} />
            <div>
              <p>{name("Kimberly Smith")} commented on your picture</p>
              <p className="date">1 week ago</p>
            </div>
          </div>
          <Image className="avatar justify-self-end" src={ImageChess} />
        </section>
        <section>
          <Image className="avatar" src={AvatarNathan} />
          <div>
            <p>
              {name("Nathan Peterson")} reacted to your recent post{" "}
              {subject("5 end-game strategies to increase your win rate")}
            </p>
            <p className="date">2 weeks ago</p>
          </div>
        </section>
        <section>
          <Image className="avatar" src={AvatarAnna} />
          <div>
            <p>
              {name("Anna Kim")} left the group {subject("Chess Club", "group")}
            </p>
            <p className="date">2 weeks ago</p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
