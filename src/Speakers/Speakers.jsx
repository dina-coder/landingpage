import React from 'react';
import classes from './Speakers.module.css'
import icon from '../img/spkicon.png'
import Speaker from './Speaker/Speaker'

const Speakers = () => {
  return (
    <div>
      <div className={classes.Content}>
        <img src={icon} />
        <div className={classes.Title}>
          SPEAKERS
        </div>
        <div className={classes.Description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultricies condimentum tris- <br />
          tique. Sed quis urna velit. Aliquam suscipit dapibus molestie. Nam auctor, risus et <br />
          varius dapibus, lorem leo dapibus nulla, id elementum tellus purus vitae augue.</div>
      </div>
      <Speaker />
    </div>
  );
}

export default Speakers;
