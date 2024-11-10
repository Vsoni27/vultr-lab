"use client";

import { cn } from "@/lib/utils";
import axios from "axios";
import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import Profile from "@/components/Profile";

interface Step {
  title: string;
  description: string;
  isDone: boolean;
}

interface ParamsProps {
  params: { id: string };
}

interface TestUserType {
  message: string;
  email: string;
  name: string;
  password: string;
  id: string;
}

const CourseDetails = ({ params }: { params: Promise<{ id: string }> }) => {
  const [steps, setSteps] = useState<Step[]>([]);
  // const [testUser, setTestUser] = useState<TestUserType>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetch() {
      try {
        const id = (await params).id;
        setLoading(true);
        console.log(id);

        // const userResponse = await axios.get(`/api/sub-account?id=${id}`);
        // setTestUser({
        //   ...userResponse.data,
        // });
        // console.log(userResponse.data);
        const response = await axios.get(`/api/lab`, {
          params: {
            id: id,
            // userId: userResponse.data.id,
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
    return (
      <div className="p-8 bg-slate-900 min-h-screen">
        <Progress />
      </div>
    );
  } else
    return (
      <div className="p-8 bg-slate-900 min-h-screen flex flex-row space-x-8">
        <div>
          <h1 className="text-white text-2xl mb-4">Steps</h1>
          {steps.map((item: Step) => (
            <div
              key={item.title}
              className={cn(
                "p-4 border rounded-md my-4 flex items-center",
                item.isDone
                  ? "bg-green-500 text-white"
                  : "bg-slate-800 text-white"
              )}
            >
              <input
                type="checkbox"
                checked={item.isDone}
                onChange={async () => {
                  try {
                    item.isDone = !item.isDone;
                    setSteps([...steps]);

                    const updateSteps = await axios.put(`/api/lab`, {
                      id: Number((await params).id),
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
        <div className="-translate-y-40">
          <Profile/>
        </div>
      </div>
    );
};

export default CourseDetails;
