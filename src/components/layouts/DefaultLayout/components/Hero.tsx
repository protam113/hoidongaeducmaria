import Image from "next/image";
import bannerImage from "@/assets/image/banner.png"; // Bạn thay đường dẫn này bằng file ảnh bạn có

const Hero = () => {
  return (
    <div className="flex justify-center py-10 cursor-pointer">
      {/* Phần hình ảnh lớn */}
      <div className="">
        <Image
          src={bannerImage}
          alt="Banner Image"
          className="rounded-sm"
          height={700}
          width={700}
          objectFit="cover"
        />
        {/* Thông báo ở giữa hình ảnh */}
        <div className="relative">
          <div className="absolute bottom-20 left-[-20px] bg-secondary-50 p-4 rounded-lg text-black w-[350px] h-[300px] ">
            <div className="flex items-center gap-2">
              <div className="relative w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <svg
                  className="absolute w-10 h-10 text-gray-400 -left-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <p className="font-semibold mr-2">nudamin</p>
              <p className="text-[#9C9C9C] text-xs">07/10/2024 19:28</p>
            </div>

            <span className="font-bold text-center">
              Dòng Đa Minh có 3 tân Hồng y: Cha Timothy Radcliffe cùng với Tổng
              Giám mục Jean-Paul Vesco, và Tổng Giám mục Francis Lê
            </span>
          </div>
        </div>
      </div>

      {/* Phần tin tức */}
      <div className="ml-4 grid gap-4 ">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="rounded-lg flex items-start gap-2 bg-secondary-50"
          >
            <Image
              src={bannerImage}
              alt="News Image"
              width={160}
              objectFit="cover"
              className="rounded-md"
            />
            <div className="w-80">
              <div className="flex items-center gap-2">
                <p className="font-semibold">DongDaMinh</p>
                <p>•</p>
                <p className="text-[#9C9C9C] text-xs">07/10/2024 19:28</p>
              </div>
              <h4 className="font-semibold ">
                Đức Giáo hoàng Phanxicô đã công bố tổ chức Công nghị Hồng y vào
                ngày 08.12.2024
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;