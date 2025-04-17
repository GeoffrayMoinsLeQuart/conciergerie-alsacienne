export default function SectionTitle({
  title,
  mainTitle = "",
  paragraph,
  center,
  width = "600px",
  marginBottom = "50px",
  color,
  titleWidth,
  paragraphWidth,
}: any) {
  return (
    <div
      className={`${center ? "mx-auto text-center" : ""}`}
      style={{ maxWidth: width, marginBottom: marginBottom }}
    >
      {mainTitle !== "" && (
        <span className="mb-2 block text-lg font-semibold text-primary">
          {mainTitle}
        </span>
      )}
      <h2
        className={`text-3xl font-bold sm:text-4xl md:text-[45px]/[55px] ${color === "white" ? "text-white" : "text-black"} ${paragraph && "mb-5"} ${titleWidth && center && "mx-auto"}`}
        style={{ maxWidth: titleWidth }}
      >
        {title}
      </h2>
      {paragraph && (
        <p
          className={`text-lg font-medium text-body-color ${paragraphWidth && center && "mx-auto"}`}
          style={{ maxWidth: paragraphWidth }}
        >
          {paragraph}
        </p>
      )}
    </div>
  );
}
