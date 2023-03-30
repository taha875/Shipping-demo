import React from "react";
import Card from "./Card/Card";
import Router from "next/router";
function index() {
  return (
    <div className="mx-auto conatiner lg:w-[1059px] mb-20">
      <Card
        onClick={() => Router.push("/serviceInner")}
        reverse={false}
        heading={"Sea Freight"}
        description={
          "Every code snippet comes baked with the best practices of web development so your project is end to end ready for every user"
        }
        image={
          "https://images.unsplash.com/photo-1524522173746-f628baad3644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1231&q=80"
        }
      />
      <Card
        onClick={() => Router.push("/serviceInner")}
        reverse={true}
        heading={"Road Transport"}
        description={
          "Every code snippet comes baked with the best practices of web development so your project is end to end ready for every user"
        }
        image={
          "https://images.unsplash.com/photo-1611746351408-c0a1346be8e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
        }
      />
      <Card
        reverse={false}
        onClick={() => Router.push("/serviceInner")}
        heading={"Air Freight"}
        description={
          "Every code snippet comes baked with the best practices of web development so your project is end to end ready for every user"
        }
        image={
          "https://images.unsplash.com/photo-1601172449745-ec49ac55ae13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        }
      />
      <Card
        reverse={true}
        onClick={() => Router.push("/serviceInner")}
        heading={"International Freight"}
        description={
          "Every code snippet comes baked with the best practices of web development so your project is end to end ready for every user"
        }
        image={
          "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        }
      />
    </div>
  );
}

export default index;
