import { useMessages } from 'next-intl';

type Purpose = {
    title: string;
    description: string;
};

type AboutMessages = {
    about: {
        purpose: Purpose[];
    };
};

export const useAboutPurpose = (): Purpose[] => {
    const messages = useMessages();

    const homeMessages = messages.home as unknown as AboutMessages;

    return homeMessages.about.purpose;
};
