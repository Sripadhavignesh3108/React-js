import Movie from "../movies/movie";

export default function Button() {
  let a = "CODE FROM JS CODE";
  return (
    <div>
      {[1, 2, 3, 4].map((each) => (
        <>
          <Movie />
          <h2>hello</h2>
        </>
      ))}
    </div>
  );
}
