var hints = [{id: "acf3da9gaussian10a-h1", type: "hint", dependencies: [], title: "Augmented Matrix", text: "First, write the system of equations as an Augmented matrix.", variabilization: {}}, {id: "acf3da9gaussian10a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\begin{bmatrix} -1 & -2 & 1 & -1 \\\\ 2 & 3 & 0 & 2 \\\\ 0 & 1 & -2 & 0 \\end{bmatrix}$$"], dependencies: ["acf3da9gaussian10a-h1"], title: "Augmented Matrix", text: "How do you write the system as an Augmented matrix?", subHints: [{id: "acf3da9gaussian10a-h2-s1", type: "hint", dependencies: [], title: "Answer", text: "The answer is $$\\begin{bmatrix} -1 & -2 & 1 & -1 \\\\ 2 & 3 & 0 & 2 \\\\ 0 & 1 & -2 & 0 \\end{bmatrix}$$.", variabilization: {}}], variabilization: {}}, {id: "acf3da9gaussian10a-h3", type: "hint", dependencies: ["acf3da9gaussian10a-h2"], title: "Obtain row-echelon form", text: "Now, perform row operations to obtain row-echelon form. You can start by multiplying row 1 by -1.", variabilization: {}}, {id: "acf3da9gaussian10a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\begin{bmatrix} 1 & 2 & -1 & 2 \\\\ 0 & 1 & -2 & 1 \\\\ 0 & 0 & 0 & 0 \\end{bmatrix}$$"], dependencies: ["acf3da9gaussian10a-h3"], title: "Obtain row-echelon form", text: "What is the new matrix in row-echelon form?", variabilization: {}}, {id: "acf3da9gaussian10a-h5", type: "hint", dependencies: ["acf3da9gaussian10a-h4"], title: "Interpret", text: "The last row of the matrix indicates $$0=0$$. This means that this is a dependent system with an $$infinite$$ number of solutions. Next, find the generic solution.", variabilization: {}}, {id: "acf3da9gaussian10a-h6", type: "scaffold", problemType: "TextBox", answerType: "string", hintAnswer: ["y=2z,2z"], dependencies: ["acf3da9gaussian10a-h5"], title: "Solve", text: "Solve for y in terms of z. What does y equal?", subHints: [{id: "acf3da9gaussian10a-h6-s1", type: "hint", dependencies: [], title: "Answer", text: "The answer is $$y=2z$$.", variabilization: {}}], variabilization: {}}, {id: "acf3da9gaussian10a-h7", type: "scaffold", problemType: "TextBox", answerType: "string", hintAnswer: ["z=(1-x)/3,(1-x)/3"], dependencies: ["acf3da9gaussian10a-h6"], title: "Solve", text: "Now, solve for z in terms of x by plugging in $$y=2z$$ into the first equation. What does z equal?", subHints: [{id: "acf3da9gaussian10a-h7-s1", type: "hint", dependencies: [], title: "Answer", text: "The answer is $$z=\\frac{1-x}{3}$$", variabilization: {}}], variabilization: {}}, {id: "acf3da9gaussian10a-h8", type: "scaffold", problemType: "TextBox", answerType: "string", hintAnswer: ["y=(2-2x)/3,(2-2x)/3"], dependencies: ["acf3da9gaussian10a-h7"], title: "Solve", text: "Finally, solve for y. Plug z into the second equation to solve it for y. What does equal in terms of x?", subHints: [{id: "acf3da9gaussian10a-h8-s1", type: "hint", dependencies: [], title: "Answer", text: "The answer is $$y=\\frac{2-2x}{3}$$.", variabilization: {}}], variabilization: {}}, {id: "acf3da9gaussian10a-h9", type: "hint", dependencies: ["acf3da9gaussian10a-h8"], title: "Answer", text: "Therefore, the solution to the system is $$(\\frac{x\\left(2-2x\\right)}{3},\\frac{1-x}{3})$$.", variabilization: {}}, ]; export {hints};