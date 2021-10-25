import React from "react";

export default function CardItem(props) {
  return (
    <div>
      <div
        style={{ height: 555 }}
        className=" w-80 mx-3 my-3 
         border-2 border-gray-700
         text-white overflow-hidden bg-bg-pf
          rounded-lg shadow-lg dark:bg-gray-800"
      >
        <img
          className="object-cover       
          object-center w-full h-48"
          src={props.img}
          alt="avatar"
        />

        <div className="flex items-center px-6 py-2 bg-gray-900">
          <img src={props.logo} width={30} alt="csharp" />
          <h1 className="mx-3 text-lg font-semibold ">{props.tag}</h1>
        </div>

        <div className="px-6 py-4">
          <h1 className="text-xl font-semibold ">{props.title}</h1>

          <p className="py-2 dark:text-gray-400">{props.disc}</p>

          <div className="flex items-center mt-4 dark:text-gray-200">
            <img
              src="https://img.icons8.com/fluency-systems-regular/48/ffffff/apps.png"
              height={24}
              width={24}
              alt={"framework"}
            />

            <h1 className="px-2 text-sm">{props.tech.item1}</h1>
          </div>

          <div className="flex items-center mt-4 dark:text-gray-200">
            <img
              src="https://img.icons8.com/ios/50/ffffff/database.png"
              height={24}
              width={24}
              alt="database"
            />

            <h1 className="px-2 text-sm">{props.tech.item2}</h1>
          </div>

          <div className="flex items-center mt-4 dark:text-gray-200">
            <img
              src="https://img.icons8.com/ios/50/ffffff/design--v1.png"
              height={24}
              width={24}
              alt="design"
            />

            <h1 className="px-2 text-sm">{props.tech.item3}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
