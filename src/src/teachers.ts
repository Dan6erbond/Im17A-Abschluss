export interface Teacher {
    name: string;
    path: string;
    page?: string;
    img?: string;
}

const t: Teacher[] = [
    {
        name: "Matthias Graf",
        path: "bLUb5kH",
        img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0HERESBxMQDxESEBEWDQ8PEhASDRASFxEWIhgRExMYHCggGBolGxMVITEhJSkrLi4uFx8zODMsNygtLi4BCgoKDQ0NDw0NDisZFRkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAQUGBAMCB//EADUQAQABAgIHBQYFBQAAAAAAAAABAgMEEQUSITFRYXETM0GBkSIyQrHB8WKCodHhFBVScvD/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AP0QAAAAAAAAAAAAAAAAAAAAAAAAABCUAkAAAAAAAAAAAATRRNc5URnM7ohbYTRtNG2/7U8Phj9wVtnDV3+7iZ5+Hq7Leiap7yqI6ZytY2bkiK3+00/5T6Q8MRoyq3GdudbjHxfyuQGYGiu4a3e7ymJ5+Pq5LuiqKu6maZ57YFVA9cRh68POVyOkxul5AAAAAAAISgEgAAAAAAAAAERNWyNs+AsNEWNaZrq+HZT1/wC+YO3A4SMNGdW2qd88OUOoBAAAAAAHxdt03YmLkZxKgxVicPVNM+U8YaJW6aozimrhMx6/YFUAKAAAAISgEgAAAAAAAAAL7R9HZ26ecZz5qBprcasRHCI+QPoAQAAAAAAcOl+7/NDucWlu7/NAKUAUAAAAQlAJAAAAAAAAAAadmIaeQABAAAAAAByaTp1rdXLKf1daKozic+AMyE8gUAAAAQlAJAAAAAAAAABDTxOe1mV3o3EdtRlO+nZPTwkHYAIAAAAAAPHF3OyoqnlOXXweyq0xfzyop61fSAViQFAAAAEJQCQAAAAAAAAAHtg7/wDT1xVO7dV0eIDTU1RXETTtid0pV+h7utTNM/DOzpP2lYCAAAAAAPHF3uwomr06s/VVNUzNW2Znas9M3fdpjrP0+qrFAAAAAAEJQCQAAAAAAAAAAAdmirvZ15T8UZefgu2YictseDS0TrRE8YgH0AIAAAQDPYy52tdU88o6Q8SeYKAAAAAAISgEgAAAAAAAAABETVsjbPhC3wGA7P2r/veEeEdeYOTDaOru5TX7Mc98x0XURluSCAAAAAAKbSODqoqmq3GdM7Zy8J5uFp1TpLBant2d3xRw5wKrgAAAAAEJQCQAAAB7WcJcve5TOXGdkOu3omqe8qiOURmCuF1b0Zap97OrrP7Om3Yot93TTHlGfqCitYW5d9ymes7I9ZddnRUz305cqds+q2BHjYw1Fju4852z6vYAAAAAAAAAEb0gKzE6L1pzw85fhnd5S4L2GuWe8pmOe+PWGiAZgXt7AWrvhqzxp2fo4L2i66O6mKo9JFcImuiaNlcTE84yQAhKASAA98DZ7aumJ3b56Q8FpoW371U8oj6/QFmAIAAAAAAAAAAAAAAAAAAAA+a6Ir2VxExzV2K0ZE7cPs/DO7ylZgMxVE0zlVsmN8IW2l7ETEV0784irp4SqRUgAL3RtGpbp57fVRUxrTlHjLS26dSIiPCIj0gH0AIAAAAAAAAAAAAAAAAAAAAAA58dRr26ojh8mfahnsZZ7CuYjdvjpIrxAB06No17lPLOZ8v5yXyp0NRnNU8IiPX7LYQAAAAAAAAAAAAAAAAAAAAAAAAVOmqNtNXGJifL7rZwaYpzoieFUfqCnAFXOiKNW3M8apdzwwVGpbpjl83uIAAAAAAAAAAAAAAAAAAAAAAAAObSFOtar6Z+kul8XqdamqONM/IGbDIFaS17tP8ArHyfYCAAAAAAAAAAAAAAAAAAAAAAAACJAGfAFf/Z"
    },
    {
        name: "Marielle Guignard",
        path: "N6bmxqI",
        page: "MGuignard",
        img: "https://3phaseadvisors.com/wp-content/uploads/2017/07/placeholder-person-380x380.jpg"
    },
    {
        name: "Lil Klink",
        path: "5rM6ams",
        img: "data:image/jpeg;base64,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",
        page: "LKlink"
    },
    {
        name: "Loredana Arleo",
        path: "SWH6Yjq",
        img: "./res/img/teachers/arleo_loredana.jpg",
        page: "LArleo"
    },
    {
        name: "Daniel Schneeberger",
        path: "EkmjaQB",
        img: "./res/img/teachers/schneeberger_daniel.jpg",
        page: "DSchneeberger"
    },
    {
        name: "Geneviève Gross",
        path: "dshb4LF",
        img: "./res/img/teachers/gross_genevieve.jpg"
    },
    {
        name: "Andreas Neeser",
        path: "hJAQqe4",
        img: "./res/img/teachers/neeser_andreas.jpg"
    },
    {
        name: "Sascha Fiechter",
        path: "eccFgkV",
        img: "./res/img/teachers/fiechter_sascha.jpg"
    },
    {
        name: "Fabian Jerg",
        path: "DSraT8n",
        page: "FJerg",
        img: "./res/img/teachers/jerg_fabian.jpg"
    },
    {
        name: "Alexander Flick",
        path: "arJqAVL",
        img: "./res/img/teachers/flick_alexander.jpg",
        page: "AFlick"
    },
    {
        name: "Lars Meyer",
        path: "cii6Kwf",
        img: "./res/img/teachers/meyer_lars.jpg",
        page: "LMeyer"
    },
    {
        name: "Réne Weidmann",
        path: "iy4e0Rr",
        img: "./res/img/teachers/weidmann_rene.jpg",
        page: "RWeidmann"
    }
];

export const teachers = t.sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0);
