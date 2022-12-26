import {IFile} from "../types";


export const tree: IFile = {
    title: "root",
    type: "folder",
    children: [
        {
            title: "src",
            type: "folder",
            children: [
                {
                    title: "components",
                    type: "folder",
                    children: [
                        {
                            title: "layout",
                            type: "folder",
                            children: [{ title: "index.tsx", type: "file" }],
                        },
                        {
                            title: "FileExplorer",
                            type: "folder",
                            children: [{ title: "index.tsx", type: "file" }],
                        },
                    ],
                },
                {
                    title: "pages",
                    type: "folder",
                    children: [
                        {
                            title: "interface",
                            type: "folder",
                            children: [{ title: "index.tsx", type: "file" }],
                        },
                    ],
                },
                {
                    title: "App.css",
                    type: "file",
                },
                {
                    title: "App.tsx",
                    type: "file",
                },
            ],
        },
        {
            title: "public",
            type: "folder",
            children: [
                { title: "index.html", type: "file" },
                { title: "manifest.json", type: "file" },
                { title: "logo.png", type: "file" },
            ],
        },

        {
            title: "package.json",
            type: "file",
        },
        {
            title: "tsconfig.json",
            type: "file",
        },
    ],
};
