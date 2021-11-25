const avatars = {
    Artem: 'https://sun9-74.userapi.com/impf/c845420/v845420354/20540c/m5j3UygwOrc.jpg?size=607x1036&quality=96&sign=02cc4c35223f11c3e474404204b87077&type=album',
    Oleg: 'https://sun9-73.userapi.com/impf/c852036/v852036917/7aea3/sY5TQmD4Af4.jpg?size=1280x960&quality=96&sign=b81435282a1e1e332d82be9914ec84c6&type=album',
    Kurt: 'https://2.bp.blogspot.com/-KX_XNRWYQC4/V7wAGRDlqaI/AAAAAAAACdA/SA8_ff2oS_MyIiAD7Kzoy5oEhD3bLddwQCLcB/s1600/Kurt%2BCobain.jpg',
    Alesya: 'https://sun9-73.userapi.com/impg/nM1YxZqIEVZKKt9hn-kEIPrBYBhNku4M95w_ww/YWF82RlPxDs.jpg?size=746x1080&quality=96&sign=5f7a12a9fece445c91c1814930bcb597&type=album'
}
export type postType = {
    id: string
    text: string,
    likesCount: number
}
export type dialogDataType = {
    id: string,
    name: string,
    avatar: string,
}
export type messageType = {
    id: string,
    avatar: string,
    name: string,
    text: string,
    time: string
}
export type messagesDataType = {
    [key: string]: Array<messageType>
}

export type profilePageType = {
    postsData: Array<postType>,
}
export type dialogsPageType = {
    dialogsData: Array<dialogDataType>,
    messagesData: messagesDataType
}
export type stateType = {
    profilePage: profilePageType,
    dialogsPage: dialogsPageType,
}

export const state: stateType = {
    profilePage: {
        postsData: [
            {id: "1", text: "Smells like teen spirit", likesCount: 142},
            {id: "2", text: "Who sold the world", likesCount: 97},
            {id: "3", text: "Do you like drugs", likesCount: 78},
            {id: "4", text: "Nirvana", likesCount: 231},
        ],
    },
    dialogsPage: {
        dialogsData: [
            {id: "1", name: "Artem", avatar: avatars.Artem},
            {id: "2", name: "Kurt", avatar: avatars.Kurt},
            {id: "3", name: "Alesya", avatar: avatars.Alesya},
        ],
        messagesData: {
            "1": [
                {
                    id: "1",
                    avatar: avatars.Oleg,
                    name: 'Oleg',
                    text: 'Hey, do you like to learn React?',
                    time: '22:00',
                },
                {
                    id: "2",
                    avatar: avatars.Artem,
                    name: 'Artem',
                    text: 'Hey, I think it\'s very hard?',
                    time: '22:03',
                },
                {
                    id: "3",
                    avatar: avatars.Oleg,
                    name: 'Oleg',
                    text: 'Try to include React in your project',
                    time: '22:07',
                },
            ],
            "2": [
                {
                    id: "1",
                    avatar: avatars.Oleg,
                    name: 'Oleg',
                    text: 'I love your songs',
                    time: '23:12',
                },
                {
                    id: "2",
                    avatar: avatars.Oleg,
                    name: 'Oleg',
                    text: 'You are really best!!!',
                    time: '23:13',
                },
                {
                    id: "3",
                    avatar: avatars.Kurt,
                    name: 'Kurt',
                    text: 'Thank you, I hope it\'s true',
                    time: '22:07',
                },
            ],
            "3": [
                {
                    id: "1",
                    avatar: avatars.Alesya,
                    name: 'Alesya',
                    text: 'How are you?',
                    time: '23:46',
                },
                {
                    id: "2",
                    avatar: avatars.Oleg,
                    name: 'Oleg',
                    text: 'Nice, what about you?',
                    time: '23:49',
                },
                {
                    id: "3",
                    avatar: avatars.Alesya,
                    name: 'Alesya',
                    text: 'I\'m happy:)',
                    time: '23:54',
                },
            ]
        }
    }
}