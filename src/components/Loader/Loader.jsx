import {FadeLoader} from "react-spinners"


export const Loader = () => {
    return (
        <FadeLoader
            color="#36d7b7"
            cssOverride={{}}
            height={15}
            loading
            margin={2}
            radius={2}
            speedMultiplier={2}
            width={5}
        />
    );
};