import { useEffect, useState } from "react";
import WordleInput from "./WordleInput";
import BlinkingLights from "./BlinkingLights";

function Modal(props: any) {
  const { text, setUseModal } = props;

  const [assignedTo, setAssignedTo] = useState<string | null>(null);
  const [revealed, setRevealed] = useState<boolean>(false);
  const [showNextHint, setShowNextHint] = useState(false);

  useEffect(() => {
    async function loadAssignment() {
      try {
        const fileURL = `${process.env.PUBLIC_URL}/files/${text}.txt`;
        const response = await fetch(fileURL);
        const data = await response.text();

        setAssignedTo(data.trim());
      } catch (err) {
        console.error("Error loading assignment:", err);
        setAssignedTo("ERROR");
      }
    }

    loadAssignment();
  }, [text]);

  const handleConfirm = () => {
    setRevealed(true);
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-60 backdrop-blur-sm z-50">
      <div className="relative w-[85vw] max-w-lg rounded-2xl shadow-2xl border-4 border-gold p-6 md:p-10 bg-green">
        <div className="flex justify-center mb-4">
            <BlinkingLights sequence={[12, 9, 7, 8, 20, 19]} speed={1500}/>
        </div>
        <button
          className="absolute top-3 right-3 text-white text-3xl font-bold hover:text-gold transition"
          onClick={() => setUseModal(false)}
        >
          ✖
        </button>

        <h1 className="text-center text-2xl md:text-4xl font-bold text-gold pb-4 drop-shadow-md">
          🎅 Confirm it's you, {text}! 🎄
        </h1>

        <p className="text-center text-white text-sm md:text-lg pb-4">
          When you click confirm, your Secret Santa assignment will be revealed.
          If you are <b>not</b> {text}, please click Cancel so you don't ruin
          the surprise!
        </p>

        <div className="mt-6 bg-white/10 border-2 border-gold rounded-xl p-6 text-center shadow-inner">
          {assignedTo === null ? (
            <p className="text-white text-xl">Loading...</p>
          ) : (
            <>
              <p className="text-white text-md md:text-lg pb-2">
                <b>{text}</b>, you will be getting a gift for:
              </p>
              <p className="text-gold text-3xl md:text-5xl font-bold drop-shadow-lg">
                {revealed ? assignedTo : "???"}
              </p>
            </>
          )}
        </div>

        <div className="flex justify-center items-center gap-6 mt-8">
          <button
            className="p-3 md:p-4 bg-red-600 hover:bg-red-500 text-white rounded-xl text-lg shadow-lg transition"
            onClick={() => setUseModal(false)}
          >
            Cancel
          </button>

          <button
            className="p-3 md:p-4 bg-green-600 hover:bg-green-500 text-white rounded-xl text-lg shadow-lg transition"
            onClick={() => handleConfirm()}
            disabled={assignedTo === null}
          >
            Confirm
          </button>
        </div>
        <div>
          <WordleInput
            solution="LIGHT"
            onSolved={() => setShowNextHint(true)}
          />
          {showNextHint && (
            <p className="text-center text-gold mt-4">
              🎁 Great job! Go to <b>/lights</b> for your next clue!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
