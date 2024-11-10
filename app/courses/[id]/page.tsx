<<<<<<< HEAD
"use client";

import { APP_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";
=======
import CourseDetails from "@/components/CourseDetails";
>>>>>>> 9f9f00f45b697a04397064787a92c0bc3635443f
import axios from "axios";

interface Step {
  title: string;
  description: string;
  isDone: boolean;
}

interface ParamsProps {
  params: { id: string };
}

const CourseDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const id = (await params).id;

  // Fetch data on the server side
  const response = await axios.get("http://localhost:3000/api/lab", {
    params: { id },
  });

<<<<<<< HEAD
        const response = await axios.get(`${APP_URL}/api/lab`, {
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

                  const updateSteps = await axios.put(`${APP_URL}/api/lab`, {
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
=======
  const steps: Step[] = response.data.lab.steps;

  return <CourseDetails steps={steps} courseId={id} />;
>>>>>>> 9f9f00f45b697a04397064787a92c0bc3635443f
};

export default CourseDetailsPage;
