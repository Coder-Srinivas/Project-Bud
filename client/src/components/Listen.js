import { Icon } from "@iconify/react";
import { listen } from "../services/transcribe.service";

const Listen = () => {
  return (
    <button className="btn-round listen" onClick={() => listen()}>
      <Icon className="listen-icon" icon="icon-park-outline:people-speak" />
    </button>
  );
};

export default Listen;
