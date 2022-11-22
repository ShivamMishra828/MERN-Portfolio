import React, { useEffect } from 'react';
import "./Home.css";
import * as THREE from "three";
import earthImage from "../../Images/earth.jpg";
import moonImage from "../../Images/moon.jpg";
import spaceImage from "../../Images/space.jpg";
import { Typography } from "@mui/material";
import TimeLine from "../TimeLine/TimeLine";
import {
  SiCplusplus,
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiThreedotjs
} from "react-icons/si";
import YoutubeCard from '../YoutubeCard/YoutubeCard';
import { Link } from "react-router-dom";
import { MouseOutlined } from "@mui/icons-material";

const Home = ({ timelines, youtubes, skills }) => {

  useEffect(() => {

    const textureLoader = new THREE.TextureLoader();
    const moonTexture = textureLoader.load(moonImage);
    const earthTexture = textureLoader.load(earthImage);
    const spaceLoader = textureLoader.load(spaceImage);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
    const canvas = document.querySelector(".homeCanvas");
    const renderer = new THREE.WebGL1Renderer({ canvas });

    const moonGeometry = new THREE.SphereGeometry(1, 64, 64);
    const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture });
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);

    const earthGeometry = new THREE.SphereGeometry(3, 64, 64);
    const earthMaterial = new THREE.MeshStandardMaterial({ map: earthTexture });
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.z = 10;
    const pointLight2 = new THREE.PointLight(0xffffff, 0.1);

    scene.add(earth);
    scene.add(moon);
    scene.add(pointLight);
    scene.add(pointLight2);
    scene.background = spaceLoader;

    moon.position.set(7, 5, 3);
    earth.position.set(2, 3, 1);
    camera.position.set(4, 4, 8);
    pointLight.position.set(8, 5, 5);
    pointLight2.position.set(-8, -5, -5);

    const constSpeed = 0.01;
    window.addEventListener("mousemove", (e) => {
      if (e.clientX <= window.innerWidth / 2) {
        earth.rotation.x -= constSpeed;
        earth.rotation.y += constSpeed;
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
      }

      if (e.clientX > window.innerWidth / 2) {
        earth.rotation.x -= constSpeed;
        earth.rotation.y -= constSpeed;
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
      }

      if (e.clientY > window.innerHeight / 2) {
        earth.rotation.x -= constSpeed;
        earth.rotation.y += constSpeed;
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
      }

      if (e.clientX <= window.innerWidth / 2) {
        earth.rotation.x -= constSpeed;
        earth.rotation.y -= constSpeed;
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
      }
    });

    const animation = () => {
      requestAnimationFrame(animation);
      earth.rotation.y += 0.001;
      moon.rotation.y += 0.001;
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
    };
    animation();

    return window.addEventListener("scroll", () => {
      camera.rotation.y = window.scrollY * 0.003;
      camera.rotation.z = window.scrollY * 0.001;

      const skillsBox = document.getElementById("homeSkillsBox");

      if (window.scrollY > 1500) {
        skillsBox.style.animationName = "homeSkillsBoxAnimationOn"
      }
      else {
        skillsBox.style.animationName = "homeSkillsBoxAnimationOff"
      }
    });
  }, []);

  return (
    <div className="home">
      <canvas className="homeCanvas"></canvas>

      <div className="homeCanvasContainer">
        <Typography variant="h1">
          <p>S</p>
          <p>H</p>
          <p>I</p>
          <p>V</p>
          <p>A</p>
          <p>M</p>
        </Typography>

      <div className="homeCanvasBox">
          <Typography variant="h2">DESIGNER</Typography>
          <Typography variant="h2">DEVELOPER</Typography>
          <Typography variant="h2">YOUTUBER</Typography>
      </div>

      <Link to="/projects">VIEW WORK</Link>
      </div>

      <div className="homeScrollBtn">
        <MouseOutlined />
      </div>

      <div className="homeContainer">
        <Typography variant="h3">TIMELINE</Typography>
        <TimeLine timelines={ timelines  } />
      </div>

      <div className="homeSkills">
        <Typography variant="h3">Skills</Typography>
        <div className="homeCubeSkills">
          <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
            <img src={skills.image1.url} alt="Skill1" />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
            <img src={skills.image2.url} alt="Skill2" />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
            <img src={skills.image3.url} alt="Skill3" />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
            <img src={skills.image4.url} alt="Skill4" />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
            <img src={skills.image5.url} alt="Skill5" />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
            <img src={skills.image6.url} alt="Skill6" />
          </div>
        </div>

        <div className="cubeShadow"></div>
        <div className="homeSkillsBox">
          <SiCplusplus />
          <SiReact />
          <SiJavascript />
          <SiMongodb />
          <SiNodedotjs />
          <SiExpress />
          <SiCss3 />
          <SiHtml5 />
          <SiThreedotjs />
        </div>
      </div>

      <div className="homeYoutube">
        <Typography variant="h3">YOUTUBE VIDEOS</Typography>
        <div className="homeYoutubeWrapper">
          {
            youtubes.map(item => (
              <YoutubeCard 
                image={item.image.url}
                title={item.title}
                url={item.url}
                id={item._id}
                key={item._id}
              />
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Home
