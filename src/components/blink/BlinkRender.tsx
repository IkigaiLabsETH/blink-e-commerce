import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface BlinkExampleProps {
  title: string;
  description: string;
  imageUrl: string;
  label: string;
}

export default function BlinkExample({
  title,
  description,
  imageUrl,
  label,
}: BlinkExampleProps) {
  return (
    <Card className="max-w-md mx-auto">
      <CardHeader className="flex flex-col items-center">
        <img
          src={imageUrl}
          alt={title}  // Improved alt text for accessibility
          className="w-full aspect-square object-cover"
          width="300"
          height="300"
        />
      </CardHeader>
      <CardContent className="text-center space-y-2">
        <p className="text-sm text-left text-muted-foreground">
          iamjoey.xyz <InfoIcon className="inline-block w-4 h-4" />
        </p>
        <h2 className="text-xl font-bold text-left">{title}</h2>
        <p className="text-muted-foreground text-left">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between gap-1">
        <Button
          variant="default"
          className="flex-1"
          onClick={() => console.log('Checkout to products clicked')}  // Add your action or navigation logic
        >
          Checkout to Products
        </Button>
        <Button
          variant="default"
          className="flex-1"
          onClick={() => console.log('Check your orders clicked')}  // Add your action or navigation logic
        >
          Check Your Orders
        </Button>
      </CardFooter>
    </Card>
  );
}

interface InfoIconProps {
  className?: string;
}

function InfoIcon({ className }: InfoIconProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}