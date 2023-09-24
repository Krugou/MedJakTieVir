// You can access the NodeCG api anytime from the `window.nodecg` object
// Or just `nodecg` for short. Like this!:
nodecg.log.info("Here's an example of using NodeCG's logging API!");
const speakerRep = nodecg.Replicant("speakerReplicant");
const roleRep = nodecg.Replicant("roleReplicant");
const speaker = document.getElementById("speaker");
const role = document.getElementById("role");
speakerRep.on("change", (newValue, oldValue) => {
    console.log(`myRep changed from ${oldValue} to ${newValue}`);
    speaker.value = newValue;
});
roleRep.on("change", (newValue, oldValue) => {
    console.log(`myRep changed from ${oldValue} to ${newValue}`);
    role.value = newValue;
});

const speakerForm = document.getElementById("speakerForm");


const submitForm = () => {
    speakerRep.value = speaker.value;
    roleRep.value = role.value;
    speakerForm.submit();
};

let timeoutId;

speaker.addEventListener("input", () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(submitForm, 5000);
});

role.addEventListener("input", () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(submitForm, 5000);
});

speakerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    submitForm();
});