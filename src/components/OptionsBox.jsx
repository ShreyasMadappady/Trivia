function OptionsBox() {
  return (
    // <div className="bg-white p-[1.63rem] rounded-[0.52rem] mt-[2.81rem] w-[34.78rem]">
    <div className="bg-white p-[1.63rem] rounded-[0.52rem] mt-[2.81rem] ">
      <div className="flex justify-between ">
        <h1
          className="font-bold text-[1.31rem
]"
        >
          Sample: 1
        </h1>
        <button>
          {" "}
          <div className="bg-[#D9D9D9] w-[3.52rem] h-[3.42rem] rounded-[0.52rem]"></div>
        </button>
      </div>
      <div className="pl-[0.42rem]">
        <h1>Script</h1>
        <div className="gap-[2.57rem] flex flex-col">
          <h1>
            Chunk 1: Evolution is the process of change in the inherited
            characteristics of living organisms over generations. Evolution is
            driven by natural selection, which is the differential survival and
            reproduction of individuals with certain traits that make them
            better adapted to their environment. Evolution is also influenced by
            random factors, such as mutations, genetic drift, and gene flow,
            which introduce variation and diversity in populations.{" "}
          </h1>
          <h1>
            Chunk 2: But evolution is not only about the present and the future.
            It is also about the past. The history of a lineage of organisms can
            affect its evolutionary potential and constraints. For example, some
            traits that evolved in the past may limit or enhance the ability of
            a lineage to evolve new traits in the future. This phenomenon is
            called path-dependent evolution, and it is one of the key questions
            in evolutionary biology.
          </h1>
          <h1>
            Chunk 3: A new study (2024) by Rebecca Varney and her colleagues
            from the University of California, Santa Barbara provides a rare and
            compelling example of path-dependent evolution in nature. The study
            focuses on the evolution of vision in a group of marine animals
            called chitons, which are mollusks related to snails and clams.
            Chitons have a shell made of eight plates, and some of them have
            eyes on their shell plates that can detect light and shapes.
          </h1>{" "}
          <h1>
            Chunk 4: The researchers discovered that there are two types of eyes
            in chitons: eyespots and shell eyes. Eyespots are simple eyes that
            can only sense light intensity and direction. Shell eyes are more
            complex eyes that can form images and have lenses made of aragonite,
            a type of mineral. The researchers found that eyespots and shell
            eyes each evolved twice independently in different lineages of
            chitons. However, they also found that the type of eye that a
            lineage could evolve depended on an older trait: the number of slits
            in the shell plates.
          </h1>
          <h1>
            Question: What do you Think! is the reason why the number of slits
            in the shell plates affects the type of eye that a lineage can
            evolve?{" "}
          </h1>
          <div>
            <h1>Answer: Developmental Constraints </h1>
            <h1>
              Explanation: The researchers wanted to understand how the
              evolution of vision in chitons was influenced by their past
              history. They studied the role of developmental constraints, which
              are limitations or biases in the way that organisms can grow and
              develop. Developmental constraints can arise from the physical,
              chemical, or genetic properties of the cells and tissues that form
              the body. Developmental constraints can affect the range and
              variation of traits that can evolve in a lineage. The researchers
              found that the number of slits in the shell plates was a
              developmental constraint for the evolution of eyes in chitons. The
              slits are openings that allow the chitons to breathe and feed. The
              slits also affect the shape and size of the shell plates, which in
              turn affect the space and resources available for the eyes to
              develop. The researchers showed that lineages with fewer slits had
              more space and resources to develop complex shell eyes, while
              lineages with more slits had less space and resources to develop
              simple eyespots.
            </h1>
          </div>{" "}
          <div className="flex font-bold gap-[0.85rem]">
            <h1>Keywords:</h1>
            <h2>
              Chitons, Eyes, Path-dependent evolution, Slits, and Developmental
              constraints.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OptionsBox;
