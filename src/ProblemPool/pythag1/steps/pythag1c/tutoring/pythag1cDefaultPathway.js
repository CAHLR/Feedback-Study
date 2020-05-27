var hints = [
  {
    id: 'pythag1c-h1',
    title: "How to approach the problem",
    text: "How can you combine the net forces in each direction that you calculated in the previous steps? ",
    type: "hint",
    dependencies: []
  },
  {
    id: 'pythag1c-h2',
    title: "Formula",
    text: "Use the Pythagorean Theorem, $a^2 + b^2 = c^2$, to calculate the resulting vector magnitude.",
    type: "hint",
    dependencies: []
  },
  {
    id: 'pythag1c-h3',
    title: "Solution",
    text: "Using the Pythagorean Theorem and previous steps, we get $\\sum F_{net}^2 = \\sum F_x^2 + \\sum F_y^2 \\implies \\sum F_{net} = \\sqrt{\\sum F_x^2 + \\sum F_y^2}$ $= \\sqrt{(0.1)^2 + (-5.40)^2} = 29.17N$",
    type: "solution",
    dependencies: [0,1]
  }
]

export {hints};