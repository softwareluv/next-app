import axios from "axios";

const searchiTunes = async (term: string, limit: number, offset: number) => {
    const res = await axios.get("https://itunes.apple.com/search", {
      params: {
        term: term,
        limit: limit,
        offset: offset,
        media: "music"
      },
    });
    return res;
}

export default searchiTunes;