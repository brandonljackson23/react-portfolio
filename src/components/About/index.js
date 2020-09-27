import React from 'react';
import ProfilePicture from '../../assets/cover/profile-pic.jpg';

function About() {
  return (
    <section className="my-5">
      <div className="my-2">
        <div className="profile-img my-5">
        <img
              src={ProfilePicture}
              alt="Brandon's Profile Picture"
              style={{
                borderRadius: "50%",
                overflow: "visible",
                boxShadow:
                  "0 8px 24px 0 rgba(0, 0, 0, 0.5), 0 8px 24px 0 rgba(0, 0, 0, 0.5)",
                height: "250px",
                width: "250px",
                marginTop: "10px",
                border: "solid 3px black",
              }}
            />
        </div>
        <p>
        An experienced product manager and leader turned full stack web software developer. I've worked in software development filling various roles for over 8 years. During that time I have worked as a Product Manager, Prodcut Owner, Technical Project Manager and Scrum Master.  In each of these roles I have worked closely with software engineers and I have long been envious of what they do.  They are able to take an idea and turin it into something usuable, something meaningful.  That is why I recently decideded to make a career change and start writing code.
        </p>
        <p>
        Having worked in so many different capacities makes me uniquely qualified to understand each of the roles involved in the software development process enabling me to better communicate, break down barriers and write quality code faster by avoiding unecessary rework.
        </p>
        <p>
        On a personal note, I am a family man who loves the outdoors.  My family and I can often be found hiking and camping on the weekend when the weather is favorable.  If not on the mountain I can be found on the basketball court trying to work off a few extra pounds.  I am a big fan of collegiate and professional sports and a sucker for a good book or entertaining movie.
        </p>
      </div>
    </section>
  );
}

export default About;