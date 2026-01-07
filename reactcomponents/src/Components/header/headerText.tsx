type HeaderTextProps = {
  headerText: string;
};

export default function HeaderText({ headerText }: HeaderTextProps) {
  return (
    <header>
      <h1>{headerText}</h1>
    </header>
  );
}
