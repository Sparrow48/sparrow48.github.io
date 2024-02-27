const Skill = ({ skill }: any) => {
  const { name, exps, image, level } = skill;
  return (
    <>
      {/* Generate JS skill square badge with Next.js */}
      <div className="flex justify-items-center max-w-md mb-2 mr-2 border-2 border-gray-500 rounded-md p-2">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 bg-white rounded-md p-1"
        />
        <div className="ml-4">
          <div className="text-gray-400 text-sm">{exps}</div>
          <div className="font-semibold">{name}</div>
        </div>
      </div>
    </>
  );
};

export default Skill;
