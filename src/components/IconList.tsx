import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

import { icons } from "lucide-react";
import { useState } from "react";

// Icon type
type IconName = keyof typeof icons;
type IconProps = {
    name: IconName;
    color?: string;
    size?: number;
};

//IconList Props
type IconListProps = {
    setSelectedIcon: (iconName: IconName) => void;
};

function IconList({ setSelectedIcon }: IconListProps) {
    const InitialValue = JSON.parse(localStorage.getItem("value") || "{}");

    const [dialogOpen, setDialogOpen] = useState(false);
    // 定义一个状态变量，用于在图标选择按钮动态显示已选中的图标
    const [menuIcon, setMenuIcon] = useState<string>(
        InitialValue.IconName || "Smile",
    );
    // 定义Icon 组件 用于动态渲染图标
    const Icon = ({ name, color, size }: IconProps) => {
        const LucidIcon = icons[name];
        if (!LucidIcon) return;
        return <LucidIcon size={size} color={color} />;
    };

    return (
        <div>
            <div
                className="flex flex-col justify-center"
                onClick={() => setDialogOpen(true)}
            >
                <label>图标</label>
                <div className="itmes-center mt-3  flex h-10  w-10 cursor-pointer justify-center rounded-md bg-gray-200 py-3">
                    <Icon name={menuIcon as IconName} size={20} color="#000" />
                </div>
            </div>
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>选择喜欢的图标</DialogTitle>
                        <DialogDescription>
                            <div className="grid h-[500px] grid-cols-3  gap-4 overflow-auto p-6 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6">
                                {Object.keys(icons).map((iconName: string, index: number) => (
                                    <div
                                        key={index}
                                        className="flex cursor-pointer items-center justify-center rounded-sm border py-3 text-black"
                                        onClick={() => {
                                            setSelectedIcon(iconName as IconName);
                                            setDialogOpen(false);
                                            setMenuIcon(iconName);
                                        }}
                                    >
                                        <Icon name={iconName as IconName} size={20} color="#000" />
                                    </div>
                                ))}
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default IconList;
