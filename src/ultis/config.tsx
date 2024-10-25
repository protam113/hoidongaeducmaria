import { MdGroups } from "react-icons/md";
import { AiOutlineHistory } from "react-icons/ai";
import { MdOutlineEventNote } from "react-icons/md";


export const NavItems = () => {
    return [
        {
            key: 1,
            label: "Trang Chủ",
            link: '/',
        },
        {
            key: 2,
            label: "Tin Tức",
            link: '/new',
        },
        {
            key: 10,
            label: "Bài Viết",
            link: '/blog',
        },
        {
            id: 3,
            label: "Hội Dòng",
            link: '/hoi_dong',
            children: [
                {
                    id: 7,
                    label: "Giới Thiệu",
                    link: '/hoi_dong/about_us',
                    icon: MdGroups,
                },
                {
                    id: 8,
                    label: "Lịch Sử Hình Thành",
                    link: '/hoi_dong/history',
                    icon: AiOutlineHistory,

                },
                {
                    id: 9,
                    label: "Ơn Gọi",
                    link: '/hoi_dong/on_goi',
                    icon: MdOutlineEventNote,

                }
            ]
        },
        {
            id: 4,
            label: "Hoạt Động",
            href: '/activity',
        },
        {
            id: 6,
            label: "Quyền Góp",
            href: '/donation',
        }
    ];
};