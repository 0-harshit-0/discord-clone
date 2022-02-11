import React from 'react';
import inviteLogo from "./assets/invite_only_landing.svg";
import hangingLogo from "./assets/hanging_out_easy_landing.svg";
import fandomLogo from "./assets/fandom_landing.svg";
import reliable from "./assets/just_chiling_landing.svg";
import {Logostart, Logoend, NavBar} from "./navigationBar.js";

function First(props) {
  return (
    <div className="content first">
      <NavBar />
      <div className="firstMainContent">
        <h1>IMAGINE A PLACE...</h1>
        <p>
          ...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.
        </p>
        <section className="btnCont">
          <button>
            <a href="/download">Download for Windows</a>
          </button>
          <button>Open Discord in browser</button>
        </section>
      </div>
    </div>
  );
}
function Second(props) {
  return (
    <div className="content commonContent second">
      <section className="imageCont">
        <img src={inviteLogo} alt="invite" />
      </section>
      <section className="txtCont">
        <h2>Create an invite-only place where you belong</h2>
        <p>
          Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.
        </p>
      </section>
    </div>
  );
}
function Third(props) {
  return (
    <div className="content commonContent third">
      <section className="txtCont">
        <h2>Where hanging out is easy</h2>
        <p>
          Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.
        </p>
      </section>
      <section className="imageCont">
        <img src={hangingLogo} alt="hanging" />
      </section>
    </div>
  );
}
function Fourth(props) {
  return (
    <div className="content commonContent fourth">
      <section className="imageCont">
        <img src={fandomLogo} alt="fandom" />
      </section>
      <section className="txtCont">
        <h2>From few to a fandom</h2>
        <p>
          Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.
        </p>
      </section>
    </div>
  );
}
function Fifth(props) {
  return (
    <div className="content fifth">
      <section>
        <h2>RELIABLE TECH FOR STAYING CLOSE</h2>
        <p>
          Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.
        </p>
      </section>
      <img src={reliable} alt="reliable" />
    </div>
  );
}
function Sixth(props) {
  return (
    <div className="content sixth">
      <div className="nonFooter">
        <h2>READY TO START YOUR JOURNEY?</h2>
        <button>
          <a href="/download">Download for Windows</a>
        </button>
      </div>
      <div className="footer">
        <h3>IMAGINE A PLACE</h3>
        <h3>IMAGINE A PLACE</h3>
        <section className="footEnd">
          <Logostart />
          <Logoend />
        </section>
      </div>
    </div>
  );
}
class Content extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <First />
        <Second />
        <Third />
        <Fourth />
        <Fifth />
        <Sixth />
      </>
    );
  }
}

export {Content};
