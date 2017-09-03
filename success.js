
      while (!success()) {
        try {
          again();
        } catch(DeathException) {
          exit(1);
        }
      }
