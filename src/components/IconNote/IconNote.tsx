import './IconNote.scss'
import { CityIcon, InfoIcon, QuestionIcon, UsersThreeIcon, Icon, PlantIcon } from "@phosphor-icons/react";

type IconNoteProps = {
    className?: string;
    icon?: 'users-three' | 'city' | 'plant' | 'question' | 'info';
    title: string;
    body: string;
}

const IconMap: Record<string, Icon> = {
    'users-three': UsersThreeIcon,
    'city': CityIcon,
    'plant': PlantIcon,
    'question': QuestionIcon,
    'info': InfoIcon,
};

export default function IconNote({className, icon = 'info', title, body}: IconNoteProps) {
    const IconComponent = IconMap[icon] ?? IconMap['info'];
    return (
        <div className={`icon_note ${className}`}>
            <div className="icon_note-hex_icon">
                 <IconComponent color='var(--orange-500)' size={20}/>
            </div>
            <div className="icon_note-text">
                <p className="icon_note-title eyebrow">{title}</p>
                <p className="icon_note-body body-s">{body}</p>
            </div>
        </div>
    );
}