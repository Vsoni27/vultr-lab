"use client";

import { cn } from "@/lib/utils";
import axios from "axios";
import { useEffect, useState } from "react";

interface Step {
  title: string;
  description: string;
  isDone: boolean;
}

interface ParamsProps {
  params: { id: string };
}

const CourseDetails = ({ params }: ParamsProps) => {
  const [steps, setSteps] = useState<Step[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetch() {
      try {
        setLoading(true);
        console.log(params.id);
        const id = params.id;

        const response = await axios.get("http://localhost:3000/api/lab", {
          params: {
            id: id,
          },
        });
        console.log(response.data);
        const stepData = response.data.lab.steps;
        setSteps(stepData);
        console.log(stepData);

      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetch();
  }, []);

  if (loading) {
    return
    <div className="p-8 bg-slate-900 min-h-screen">

      Loading...</div>;
  } else
    return (
      <div className="p-8 bg-slate-900 min-h-screen">
        <h1 className="text-white text-2xl mb-4">Steps</h1>
        {steps.map((item: Step) => (
          <div
            key={item.title}
            className={cn(
              "p-4 border rounded-md my-4 flex items-center",
              item.isDone ? "bg-green-500 text-white" : "bg-slate-800 text-white"
            )}
          >
            <input
              type="checkbox"
              checked={item.isDone}
              onChange={async () => {
                try {
                  item.isDone = !item.isDone;
                  setSteps([...steps]);

                  const updateSteps = await axios.put("http://localhost:3000/api/lab", {
                    id: params.id,
                    steps: [...steps],
                  });
                } catch (error) {
                  console.log(error);
                }
              }}
              className="mr-4 p-16"
            />
            <div>
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-sm mt-2">{item.description}</p>

            </div>
          </div>
        ))}
      </div>
    );
};

export default CourseDetails;
