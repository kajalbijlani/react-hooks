import React, { useState } from "react";
import useFriendStatus from "./useFriendStatus";

const friendList = [
  { id: 1, name: "kajal" },
  { id: 2, name: "Nishi" },
  { id: 3, name: "Khushali" }
];

function ChatRecipientPicker() {
  const [recipientID, setRecipientID] = useState(1);
  const isRecipientOnline = useFriendStatus(recipientID);

  return (
    <div>
      <div>{isRecipientOnline ? "Online" : "Offline"}</div>
      <select
        value={recipientID}
        onChange={e => setRecipientID(Number(e.target.value))}
      >
        {friendList.map(friend => (
          <option key={friend.id} value={friend.id}>
            {friend.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ChatRecipientPicker;
