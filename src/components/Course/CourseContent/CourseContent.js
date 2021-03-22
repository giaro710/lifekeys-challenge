import React from "react";
import "./CourseContent.css";

const CourseContent = ({ content: { title }, content: { textContent } }) => {
  return (
    <>
      <h3
        style={{
          fontWeight: "600",
          // fontSize: "25px",
          textDecoration: "none",
        }}
      >
        {title}
      </h3>
      <p className="text-justify">{textContent}</p>
      <p
        className="text-justify contentParagraph"
        style={{ lineHeight: "40px", fontSize: "1.2rem", fontWeight: "300" }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Maecenas volutpat
        blandit aliquam etiam erat velit scelerisque in dictum. Adipiscing diam
        donec adipiscing tristique risus. Odio aenean sed adipiscing diam donec
        adipiscing tristique. Convallis a cras semper auctor neque vitae tempus
        quam pellentesque. Nibh praesent tristique magna sit. Morbi tristique
        senectus et netus et. Viverra maecenas accumsan lacus vel facilisis
        volutpat. Commodo viverra maecenas accumsan lacus vel facilisis
        volutpat. Consequat id porta nibh venenatis cras sed felis eget.
        Condimentum id venenatis a condimentum vitae sapien pellentesque
        habitant. Aliquet enim tortor at auctor urna nunc id cursus metus. Dui
        vivamus arcu felis bibendum. Felis donec et odio pellentesque diam
        volutpat commodo. Amet dictum sit amet justo donec enim. Integer quis
        auctor elit sed vulputate. Lorem ipsum dolor sit amet consectetur
        adipiscing elit duis. Nulla pharetra diam sit amet nisl suscipit.
        Consectetur a erat nam at lectus urna. Libero nunc consequat interdum
        varius sit amet mattis vulputate. Tristique senectus et netus et
        malesuada fames. Dui nunc mattis enim ut tellus. Rutrum tellus
        pellentesque eu tincidunt tortor aliquam. Eget egestas purus viverra
        accumsan in. Iaculis nunc sed augue lacus viverra vitae congue. Tempor
        orci dapibus ultrices in iaculis nunc sed augue. Est ante in nibh mauris
        cursus mattis molestie. Sit amet mattis vulputate enim nulla aliquet
        porttitor lacus. Eu nisl nunc mi ipsum faucibus. Pellentesque eu
        tincidunt tortor aliquam. Interdum consectetur libero id faucibus nisl
        tincidunt eget. Nisi porta lorem mollis aliquam ut. Fringilla est
        ullamcorper eget nulla facilisi. Sapien et ligula ullamcorper malesuada
        proin libero nunc consequat. Vel eros donec ac odio tempor orci. At
        consectetur lorem donec massa. Odio ut sem nulla pharetra diam sit amet.
        Mauris nunc congue nisi vitae suscipit. Rhoncus urna neque viverra justo
        nec ultrices dui sapien. Lobortis elementum nibh tellus molestie nunc
        non. Nascetur ridiculus mus mauris vitae ultricies leo. Viverra vitae
        congue eu consequat ac felis donec. Sit amet cursus sit amet dictum sit
        amet justo. Lacus vel facilisis volutpat est velit egestas. Feugiat
        vivamus at augue eget arcu dictum varius. Adipiscing elit ut aliquam
        purus sit amet luctus venenatis. Turpis egestas pretium aenean pharetra
        magna ac placerat vestibulum lectus. Arcu risus quis varius quam
        quisque. Quis auctor elit sed vulputate. Tincidunt lobortis feugiat
        vivamus at. Pharetra sit amet aliquam id diam. Pharetra magna ac
        placerat vestibulum. Sagittis eu volutpat odio facilisis mauris sit amet
        massa vitae. Integer vitae justo eget magna fermentum. Faucibus ornare
        suspendisse sed nisi lacus. Donec ac odio tempor orci dapibus ultrices
        in iaculis nunc. Condimentum lacinia quis vel eros donec ac. Integer
        malesuada nunc vel risus commodo viverra. Arcu dui vivamus arcu felis
        bibendum ut tristique et egestas. Sed faucibus turpis in eu. Commodo
        ullamcorper a lacus vestibulum sed. Non tellus orci ac auctor. Maecenas
        sed enim ut sem viverra aliquet. Pretium fusce id velit ut tortor
        pretium viverra suspendisse potenti. Augue neque gravida in fermentum.
        Accumsan lacus vel facilisis volutpat est velit egestas dui id. Facilisi
        cras fermentum odio eu feugiat pretium nibh ipsum. Pulvinar pellentesque
        habitant morbi tristique senectus et netus et. Est ante in nibh mauris
        cursus mattis molestie a. Posuere sollicitudin aliquam ultrices sagittis
        orci a scelerisque purus. Id velit ut tortor pretium viverra
        suspendisse. Convallis aenean et tortor at risus viverra adipiscing. At
        elementum eu facilisis sed odio morbi quis commodo odio. Pulvinar
        pellentesque habitant morbi tristique senectus et. Id eu nisl nunc mi
        ipsum faucibus vitae aliquet. At elementum eu facilisis sed odio. Sit
        amet cursus sit amet dictum. Scelerisque eu ultrices vitae auctor eu
        augue ut. Sed felis eget velit aliquet sagittis. Nunc eget lorem dolor
        sed viverra ipsum nunc. Condimentum id venenatis a condimentum. Elit sed
        vulputate mi sit amet mauris commodo quis. Nunc pulvinar sapien et
        ligula ullamcorper. Sem et tortor consequat id porta nibh venenatis.
        Auctor urna nunc id cursus metus aliquam eleifend. Velit scelerisque in
        dictum non. Libero nunc consequat interdum varius sit amet mattis
        vulputate. Ornare suspendisse sed nisi lacus. Malesuada pellentesque
        elit eget gravida cum sociis natoque penatibus et.
      </p>
    </>
  );
};

export default CourseContent;
