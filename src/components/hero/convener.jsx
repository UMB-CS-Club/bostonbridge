import React from "react";
import "./convener.css";
const convener = () => {
  return (
    <React.Fragment>
      <div className="parent-convener">
        <div className="convener-title">
          <img src="/images/rrr.png" alt="" className="convener-logo" />
          <h1 className="convener-title-name">Staff</h1>
        </div>

        <div className="convener-container">
          <ConvenerCard
            name="Ayden Diel"
            image="https://media.discordapp.net/attachments/1197256108604145765/1202413975627890698/1695827912071.png?ex=65cd5e47&is=65bae947&hm=28a3172db1c53f673bc6d57fd57b8e9cd4b88df0429eb584d251c0f1d068ea01&=&format=webp&quality=lossless&width=702&height=702"
            position="President of CSC"
          />
          <ConvenerCard
            name="Edward Gaibor"
            image="https://media.discordapp.net/attachments/1197256108604145765/1202414083769638912/1695702655227.png?ex=65cd5e61&is=65bae961&hm=b1bade52720ada3dac7266e147af48db0c16c69b501b2a5ca8347c48fd45d85b&=&format=webp&quality=lossless&width=702&height=702"
            position="Event Coordinator and Logistics Manager of the CSC"
          />
          <ConvenerCard
            name="Minh Nguyen"
            image="https://media.discordapp.net/attachments/1197256108604145765/1202414232499658814/1701560473636.png?ex=65cd5e84&is=65bae984&hm=8ccd84df50da1043872efc62e61b91cc2a65821b8a37abdeb3d381483bcf6d97&=&format=webp&quality=lossless"
            position="Event Planner Team for the CSC"
          />
          <ConvenerCard
            name="Wilhen Alberto"
            image="https://media.discordapp.net/attachments/1197256108604145765/1202414352213483590/1701796354283.png?ex=65cd5ea1&is=65bae9a1&hm=573b3811efd52e454d76f9d4e4c20065bf656cc8eee3e09ab82b7be16eb52f87&=&format=webp&quality=lossless&width=702&height=702"
            position="General Staff Officer of the CSC" />
          <ConvenerCard
            name="Brendan Nguyen"
            image="https://media.discordapp.net/attachments/1197256108604145765/1202414433293303838/1633533752349.png?ex=65cd5eb4&is=65bae9b4&hm=ad27a4d04dbd76649f9e2414c345c52d2804056b9d01f2865ff7b86adb782671&=&format=webp&quality=lossless&width=702&height=702"
            position="General Staff Officer of the CSC" />
          <ConvenerCard
            name="Jean Gerard"
            image="https://media.discordapp.net/attachments/1197256108604145765/1202414518563770368/1688750826710.png?ex=65cd5ec9&is=65bae9c9&hm=1d8a199c5cd669490ef42793de096a7c045f1a0b991858cce2cb49292b8e0a04&=&format=webp&quality=lossless&width=702&height=702"
            position="General Staff Officer of the CSC" />
          <ConvenerCard
            name="Matheus Berbet"
            image="https://media.discordapp.net/attachments/1197256108604145765/1202414897070211082/1698897540684.png?ex=65cd5f23&is=65baea23&hm=c5f1f336822383533dd5e2cb4e0a1bd714fdf7b03c15dbb066478d896cf5c906&=&format=webp&quality=lossless&width=702&height=702"
            position="Financial Team Lead for the CSC" />
          <ConvenerCard
            name="Jon Carlos O'Neil"
            image="https://media.discordapp.net/attachments/1197256108604145765/1202415729769717790/1702147060163.png?ex=65cd5fe9&is=65baeae9&hm=d71f6bf41d3d9447499e2e53f3fe9866895364eb40922b08113f7ddf7564bd2c&=&format=webp&quality=lossless&width=996&height=702" position="CS Club Advisor" />
        </div>
      </div>
    </React.Fragment>
  );
};

const ConvenerCard = ({ name, image, position }) => {
  return (
    <div className="convener-card">
      <img
        className="convener-card-image"
        src={image}
        alt={name}
      />
      <h1 className="convener-name">{name}</h1>

      <h1 className="convener-position">
        {position}{" "}
      </h1>
    </div>
  );
};

export default convener;
