import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { cache: "no-store" });
  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.body}</p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/18762544/pexels-photo-18762544/free-photo-of-wraped-in-yellow.jpeg"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>USERNAME</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/18762544/pexels-photo-18762544/free-photo-of-wraped-in-yellow.jpeg"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus placeat ut quod laudantium reiciendis saepe optio, ratione,
          exercitationem excepturi sequi consequatur laboriosam quam repellat. Maiores temporibus nulla neque accusantium saepe illo, ullam tenetur
          odio quasi ipsam molestiae rem ex consectetur exercitationem quas perferendis optio dicta. Exercitationem reprehenderit obcaecati, quibusdam
          magnam rem sunt ab porro ratione aliquid cupiditate accusantium totam deserunt voluptates iusto earum voluptatem. Consequuntur possimus
          reiciendis in veritatis minima perspiciatis repellat vero voluptas laboriosam. Quia qui numquam modi repudiandae asperiores veritatis
          doloribus dolores natus nihil, aliquam cupiditate obcaecati quis delectus, fugit et ducimus? Nobis at alias quidem ut quibusdam!
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
