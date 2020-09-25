var hints = [{id: "rational18a-h1", type: "hint", dependencies: [], title: "Common Denominator", text: "The first step is to find the least common denominator of two rational expressions."}, {id: "rational18a-h2", type: "scaffold", problemType: "TextBox", answerType: "algebra", hintAnswer: ["(a+1)(a-3)"], dependencies: ["rational18a-h1"], title: "Common Denominator", text: "What is the least common denominator?"}, {id: "rational18a-h3", type: "hint", dependencies: ["rational18a-h2"], title: "Common Denominator", text: "Since we do not know the value of a, the least common multiple of the denominators is their product. So, the LCD is $\\left(a+1\\right) \\left(a-3\\right)$."}, {id: "rational18a-h4", type: "hint", dependencies: ["rational18a-h3"], title: "Multiplying the First Expression", text: "Now we need to multiply both expressions by a factor equal to 1 that makes the denominators equal to the LCD. Starting with the first expression, we can multiply $\\frac{4}{a+1}$ by a factor to make the denominator $\\left(a+1\\right) \\left(a-3\\right)$."}, {id: "rational18a-h5", type: "hint", dependencies: ["rational18a-h4"], title: "Multiplying the First Expression", text: "The denominator of $\\frac{4}{a+1}$ multiplied by $a+3$ equals $\\left(a+1\\right) \\left(a+3\\right)$. So, we need to multiply $\\frac{4}{a+1}$ by $\\frac{a+3}{a+3}$."}, {id: "rational18a-h6", type: "scaffold", problemType: "TextBox", answerType: "algebra", hintAnswer: ["(4a-12)/((a+1)(a-3)"], dependencies: ["rational18a-h5"], title: "Multiplying the First Expression", text: "What is $\\frac{4}{a+1} \\frac{a-3}{a-3}$?"}, {id: "rational18a-h7", type: "scaffold", problemType: "TextBox", answerType: "algebra", hintAnswer: ["4a-12"], dependencies: ["rational18a-h6"], title: "Multiplying the First Expression", text: "What is $4\\left(a-3\\right)$?"}, {id: "rational18a-h8", type: "hint", dependencies: ["rational18a-h7"], title: "Multiplying the First Expression", text: "When multiplying fractions, we multiply the numerators and multiply the denominators. For the numerators, we can distribute the 4 into the $a+3$ by adding $4a$ andadding it to $4\\times-3$. The numerator then becomes 4a-12. After multiplying the denominators, we can leave the denominator as $\\left(a+1\\right) \\left(a-3\\right)$ since it is in its factored form. So, the new expression becomes $\\frac{4a-12}{\\left(a+1\\right) \\left(a-3\\right)}$."}, {id: "rational18a-h9", type: "hint", dependencies: ["rational18a-h8"], title: "Multiplying the Second Expression", text: "Next, we need to multiply the second expression by a fraction to make the denominator equal to the LCD. Because the denominator of $\\frac{5}{a-3}$ needs to by multiplied by $a+1$ to become (a+1)(a-3), we need to $\\frac{5}{a-3}$ by $\\frac{a+1}{a+1}$."}, {id: "rational18a-h10", type: "scaffold", problemType: "TextBox", answerType: "algebra", hintAnswer: ["(5a+5)/((a+1)(a-3))"], dependencies: ["rational18a-h9"], title: "Multiplying the Second Expression", text: "What is $\\frac{5}{a-3} \\frac{a+1}{a+1}$?"}, {id: "rational18a-h11", type: "hint", dependencies: ["rational18a-h10"], title: "Multiplying the Second Expression", text: "We distribute the 5 into $a+1$ to get $5a+4$. Then, we leave the denominator in its factored form."}, {id: "rational18a-h12", type: "hint", dependencies: ["rational18a-h11"], title: "Adding the Expressions", text: "Because the expressions now have the same denominator, we can add the numerators to get the sum of the two expressions. We'll leave the denominator as it is, but combine the numerator's like terms."}, {id: "rational18a-h13", type: "scaffold", problemType: "TextBox", answerType: "algebra", hintAnswer: ["9a"], dependencies: ["rational18a-h12"], title: "Adding the Expressions", text: "What is $5a+4a$?"}, {id: "rational18a-h14", type: "scaffold", problemType: "TextBox", answerType: "numeric", hintAnswer: ["-7"], dependencies: ["rational18a-h13"], title: "Adding the Expressions", text: "What is $-12+5$?"}, {id: "rational18a-h15", type: "hint", dependencies: ["rational18a-h14"], title: "Final Expression", text: "Now we have our final expression: $\\frac{9a-7}{\\left(a+1\\right) \\left(a-3\\right)}$."}, ]; export {hints};