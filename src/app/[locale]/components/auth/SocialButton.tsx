import Link from "next/link";

interface SocialButtonProps {
    provider: string;
    iconClass: string;
    context: "Inicia" | "Registrate";
}

export const SocialButton = ({ provider, iconClass, context }: SocialButtonProps) => {
    const route = provider === "Back" ? "/" : `/auth/${provider.toLowerCase()}`;

    return (
        <Link href={route} aria-label={`${context} with ${provider}`}>
            <i className={iconClass} aria-hidden="true"></i>
        </Link>
    );
};
