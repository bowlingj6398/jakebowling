class mach {
    public static void main(String args[])
    {
       try (BufferedReader br = new BufferedReader(new FileReader("../text/about.txt"))) {
         String line;
         while ((line = br.readLine()) != null) {
         System.out.println(line);
         }
      }
    }
}
