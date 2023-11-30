import React, { useState, useEffect } from "react";

function BeritaIntro({ post }) {
  return (
    <div className="mx-auto mt-0 px-10 md:px-15 lg:px-32">
      <div
        className="grid grid-cols-1 cursor-pointer md:grid-cols-2 gap-8 bg-white border border-gray-300 rounded-xl"
      >
        <img
          src={post.image}
          className="object-cover w-full h-full rounded-s-xl"
        />
        <div>
          <h2 className="font-jakarta text-[23px] font-bold mt-5">{post.title}</h2>
          <h4 className="font-jakarta line-clamp-6 text-gray-400 mt-5 mr-5">{post.content}</h4>
          <div className="flex items-center mt-5">
            <img src={post.avatar} className="w-[35px] rounded-full" />
            <div className="ml-2">
              <h3 className="font-bold font-jakarta text-[16px]">{post.author}</h3>
              <h3 className="text-gray-500 font-jakarta text-[16px]">{post.date}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BeritaIntro;
