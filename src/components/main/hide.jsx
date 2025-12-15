const Hide = ({ setActiveTab }) => {
  return (
    <nav className="flex gap-6 bg-black text-white p-4">
      <button onClick={() => setActiveTab("home")}>Home</button>
      <button onClick={() => setActiveTab("contact")}>Contact</button>
    </nav>
  );
};

export default Hide;