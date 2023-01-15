# The Goals of Code Quality

There are four high-level goals that we should aim to achieve when writing code:

1. It should work.
2. It should keep working.
3. It should be adaptable to changing requirements.
4. It should not reinvent the wheel.

## Code Should Work

Do determine if code works or not, we want to very clear about what the code needs to achieve to be considered working code.

## Code Should Keep Working

Code does not live in isolation, and if we're not careful it can easily break as things around it change.

- Code likely depends on other code that will get modified, updated, and changed.
- Any new functionality required may mean that modifications are required to the code.
- The problem that we're trying to solve might evolve over time: consumer preferences, business needs, and technology considerations can all change.

Code that works today but breaks tomorrow when one of these things changes is not very useful. It's often easy to create code that works but a lot harder to create code that keeps working. Ensuring that code keeps working is one of the biggest considerations that software engineers face and is something that needs to be considered at all stages of coding. Considering it is an afterthought or assuming that just adding some tests later on will achieve this are often not effective approaches.

## Code Should be Adaptable to Changing Requirements

Continued development on a piece of software can span several months, usually several years, and sometimes even decades. Throughout this process requirements change:

- Business realties shift
- Consumer preferences change
- Assumptions get invalidated
- New features are continually added

Deciding how much effort to put into make code adaptable can be a tricky balancing act. On the one hand, we pretty much know the requirements for a piece of software will evolve over time. But on the other hand, we often have no certainty about exactly how they will evolve. It's impossible to make perfectly accurate predictions about how a piece of code or software will change over time.

## Code Should Not Reinvent the Wheel

When we write code to solve a problem, we generally take a big problem and break it down into multiple smaller subproblems. for example, if we were writing code to load an image file, turn it into a grayscale image, and then save it again, the subproblems we need to solve are as follows:

- Load some bytes of data from a file
- Parse the bytes of data into an image format
- Transform the image to grayscale
- Convert the image back into bytes
- Save those bytes back to the file

Many of those problems have already been solved by others. We don't need to write all of the code to do the low-level communication with the file system. There is probably also an existing library we can pull in to parse the bytes into an image.

There are several reasons it's best to make use of an existing solution over reinventing it:

- It saves time and effort
- It decreases the chance of bugs
- It utilizes existing expertise
- It makes code easier to understand

The concept of not reinventing the wheel applies in both directions. If another engineer has already written code to solve a subproblem, then we should call their code rather than writing our own to solve it.

Similarly, if we write code to solve a subproblem, then **we should structure our code in a way that makes it easy for other engineers to reuse so that they don't need to reinvent the wheel.**

